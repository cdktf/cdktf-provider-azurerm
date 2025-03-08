# `dataAzurermMonitorScheduledQueryRulesAlert` Submodule <a name="`dataAzurermMonitorScheduledQueryRulesAlert` Submodule" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMonitorScheduledQueryRulesAlert <a name="DataAzurermMonitorScheduledQueryRulesAlert" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/monitor_scheduled_query_rules_alert azurerm_monitor_scheduled_query_rules_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesAlert } from '@cdktf/provider-azurerm'

new dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert(scope: Construct, id: string, config: DataAzurermMonitorScheduledQueryRulesAlertConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig">DataAzurermMonitorScheduledQueryRulesAlertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig">DataAzurermMonitorScheduledQueryRulesAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermMonitorScheduledQueryRulesAlertTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts">DataAzurermMonitorScheduledQueryRulesAlertTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMonitorScheduledQueryRulesAlert resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isConstruct"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesAlert } from '@cdktf/provider-azurerm'

dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformElement"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesAlert } from '@cdktf/provider-azurerm'

dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformDataSource"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesAlert } from '@cdktf/provider-azurerm'

dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesAlert } from '@cdktf/provider-azurerm'

dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermMonitorScheduledQueryRulesAlert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMonitorScheduledQueryRulesAlert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMonitorScheduledQueryRulesAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/monitor_scheduled_query_rules_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMonitorScheduledQueryRulesAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList">DataAzurermMonitorScheduledQueryRulesAlertActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.authorizedResourceIds">authorizedResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.frequency">frequency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.queryType">queryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.severity">severity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.throttling">throttling</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference">DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.timeWindow">timeWindow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.trigger">trigger</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList">DataAzurermMonitorScheduledQueryRulesAlertTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts">DataAzurermMonitorScheduledQueryRulesAlertTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.action"></a>

```typescript
public readonly action: DataAzurermMonitorScheduledQueryRulesAlertActionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList">DataAzurermMonitorScheduledQueryRulesAlertActionList</a>

---

##### `authorizedResourceIds`<sup>Required</sup> <a name="authorizedResourceIds" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.authorizedResourceIds"></a>

```typescript
public readonly authorizedResourceIds: string[];
```

- *Type:* string[]

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.frequency"></a>

```typescript
public readonly frequency: number;
```

- *Type:* number

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.queryType"></a>

```typescript
public readonly queryType: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.severity"></a>

```typescript
public readonly severity: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `throttling`<sup>Required</sup> <a name="throttling" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.throttling"></a>

```typescript
public readonly throttling: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference">DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference</a>

---

##### `timeWindow`<sup>Required</sup> <a name="timeWindow" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.timeWindow"></a>

```typescript
public readonly timeWindow: number;
```

- *Type:* number

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.trigger"></a>

```typescript
public readonly trigger: DataAzurermMonitorScheduledQueryRulesAlertTriggerList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList">DataAzurermMonitorScheduledQueryRulesAlertTriggerList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermMonitorScheduledQueryRulesAlertTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts">DataAzurermMonitorScheduledQueryRulesAlertTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlert.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMonitorScheduledQueryRulesAlertAction <a name="DataAzurermMonitorScheduledQueryRulesAlertAction" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertAction.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesAlert } from '@cdktf/provider-azurerm'

const dataAzurermMonitorScheduledQueryRulesAlertAction: dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertAction = { ... }
```


### DataAzurermMonitorScheduledQueryRulesAlertConfig <a name="DataAzurermMonitorScheduledQueryRulesAlertConfig" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesAlert } from '@cdktf/provider-azurerm'

const dataAzurermMonitorScheduledQueryRulesAlertConfig: dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/monitor_scheduled_query_rules_alert#name DataAzurermMonitorScheduledQueryRulesAlert#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/monitor_scheduled_query_rules_alert#resource_group_name DataAzurermMonitorScheduledQueryRulesAlert#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/monitor_scheduled_query_rules_alert#id DataAzurermMonitorScheduledQueryRulesAlert#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts">DataAzurermMonitorScheduledQueryRulesAlertTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/monitor_scheduled_query_rules_alert#name DataAzurermMonitorScheduledQueryRulesAlert#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/monitor_scheduled_query_rules_alert#resource_group_name DataAzurermMonitorScheduledQueryRulesAlert#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/monitor_scheduled_query_rules_alert#id DataAzurermMonitorScheduledQueryRulesAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMonitorScheduledQueryRulesAlertTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts">DataAzurermMonitorScheduledQueryRulesAlertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/monitor_scheduled_query_rules_alert#timeouts DataAzurermMonitorScheduledQueryRulesAlert#timeouts}

---

### DataAzurermMonitorScheduledQueryRulesAlertTimeouts <a name="DataAzurermMonitorScheduledQueryRulesAlertTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesAlert } from '@cdktf/provider-azurerm'

const dataAzurermMonitorScheduledQueryRulesAlertTimeouts: dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/monitor_scheduled_query_rules_alert#read DataAzurermMonitorScheduledQueryRulesAlert#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/monitor_scheduled_query_rules_alert#read DataAzurermMonitorScheduledQueryRulesAlert#read}.

---

### DataAzurermMonitorScheduledQueryRulesAlertTrigger <a name="DataAzurermMonitorScheduledQueryRulesAlertTrigger" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTrigger.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesAlert } from '@cdktf/provider-azurerm'

const dataAzurermMonitorScheduledQueryRulesAlertTrigger: dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTrigger = { ... }
```


### DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger <a name="DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesAlert } from '@cdktf/provider-azurerm'

const dataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger: dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMonitorScheduledQueryRulesAlertActionList <a name="DataAzurermMonitorScheduledQueryRulesAlertActionList" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesAlert } from '@cdktf/provider-azurerm'

new dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference <a name="DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesAlert } from '@cdktf/provider-azurerm'

new dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.actionGroup">actionGroup</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.customWebhookPayload">customWebhookPayload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.emailSubject">emailSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertAction">DataAzurermMonitorScheduledQueryRulesAlertAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionGroup`<sup>Required</sup> <a name="actionGroup" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.actionGroup"></a>

```typescript
public readonly actionGroup: string[];
```

- *Type:* string[]

---

##### `customWebhookPayload`<sup>Required</sup> <a name="customWebhookPayload" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.customWebhookPayload"></a>

```typescript
public readonly customWebhookPayload: string;
```

- *Type:* string

---

##### `emailSubject`<sup>Required</sup> <a name="emailSubject" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.emailSubject"></a>

```typescript
public readonly emailSubject: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorScheduledQueryRulesAlertAction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertAction">DataAzurermMonitorScheduledQueryRulesAlertAction</a>

---


### DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference <a name="DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesAlert } from '@cdktf/provider-azurerm'

new dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts">DataAzurermMonitorScheduledQueryRulesAlertTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermMonitorScheduledQueryRulesAlertTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTimeouts">DataAzurermMonitorScheduledQueryRulesAlertTimeouts</a>

---


### DataAzurermMonitorScheduledQueryRulesAlertTriggerList <a name="DataAzurermMonitorScheduledQueryRulesAlertTriggerList" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesAlert } from '@cdktf/provider-azurerm'

new dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList <a name="DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesAlert } from '@cdktf/provider-azurerm'

new dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference <a name="DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesAlert } from '@cdktf/provider-azurerm'

new dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricColumn">metricColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricTriggerType">metricTriggerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger">DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricColumn`<sup>Required</sup> <a name="metricColumn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricColumn"></a>

```typescript
public readonly metricColumn: string;
```

- *Type:* string

---

##### `metricTriggerType`<sup>Required</sup> <a name="metricTriggerType" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.metricTriggerType"></a>

```typescript
public readonly metricTriggerType: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger">DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTrigger</a>

---


### DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference <a name="DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesAlert } from '@cdktf/provider-azurerm'

new dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.metricTrigger">metricTrigger</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList">DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTrigger">DataAzurermMonitorScheduledQueryRulesAlertTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricTrigger`<sup>Required</sup> <a name="metricTrigger" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.metricTrigger"></a>

```typescript
public readonly metricTrigger: DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList">DataAzurermMonitorScheduledQueryRulesAlertTriggerMetricTriggerList</a>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorScheduledQueryRulesAlertTrigger;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesAlert.DataAzurermMonitorScheduledQueryRulesAlertTrigger">DataAzurermMonitorScheduledQueryRulesAlertTrigger</a>

---



