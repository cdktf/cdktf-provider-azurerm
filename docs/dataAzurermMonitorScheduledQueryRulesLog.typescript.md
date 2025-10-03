# `dataAzurermMonitorScheduledQueryRulesLog` Submodule <a name="`dataAzurermMonitorScheduledQueryRulesLog` Submodule" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMonitorScheduledQueryRulesLog <a name="DataAzurermMonitorScheduledQueryRulesLog" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/monitor_scheduled_query_rules_log azurerm_monitor_scheduled_query_rules_log}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesLog } from '@cdktf/provider-azurerm'

new dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog(scope: Construct, id: string, config: DataAzurermMonitorScheduledQueryRulesLogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig">DataAzurermMonitorScheduledQueryRulesLogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig">DataAzurermMonitorScheduledQueryRulesLogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermMonitorScheduledQueryRulesLogTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts">DataAzurermMonitorScheduledQueryRulesLogTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMonitorScheduledQueryRulesLog resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isConstruct"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesLog } from '@cdktf/provider-azurerm'

dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isTerraformElement"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesLog } from '@cdktf/provider-azurerm'

dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isTerraformDataSource"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesLog } from '@cdktf/provider-azurerm'

dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.generateConfigForImport"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesLog } from '@cdktf/provider-azurerm'

dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermMonitorScheduledQueryRulesLog resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermMonitorScheduledQueryRulesLog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermMonitorScheduledQueryRulesLog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/monitor_scheduled_query_rules_log#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMonitorScheduledQueryRulesLog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.authorizedResourceIds">authorizedResourceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.criteria">criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList">DataAzurermMonitorScheduledQueryRulesLogCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference">DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts">DataAzurermMonitorScheduledQueryRulesLogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `authorizedResourceIds`<sup>Required</sup> <a name="authorizedResourceIds" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.authorizedResourceIds"></a>

```typescript
public readonly authorizedResourceIds: string[];
```

- *Type:* string[]

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.criteria"></a>

```typescript
public readonly criteria: DataAzurermMonitorScheduledQueryRulesLogCriteriaList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList">DataAzurermMonitorScheduledQueryRulesLogCriteriaList</a>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference">DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermMonitorScheduledQueryRulesLogTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts">DataAzurermMonitorScheduledQueryRulesLogTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMonitorScheduledQueryRulesLogConfig <a name="DataAzurermMonitorScheduledQueryRulesLogConfig" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesLog } from '@cdktf/provider-azurerm'

const dataAzurermMonitorScheduledQueryRulesLogConfig: dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/monitor_scheduled_query_rules_log#name DataAzurermMonitorScheduledQueryRulesLog#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/monitor_scheduled_query_rules_log#resource_group_name DataAzurermMonitorScheduledQueryRulesLog#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/monitor_scheduled_query_rules_log#id DataAzurermMonitorScheduledQueryRulesLog#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts">DataAzurermMonitorScheduledQueryRulesLogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/monitor_scheduled_query_rules_log#name DataAzurermMonitorScheduledQueryRulesLog#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/monitor_scheduled_query_rules_log#resource_group_name DataAzurermMonitorScheduledQueryRulesLog#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/monitor_scheduled_query_rules_log#id DataAzurermMonitorScheduledQueryRulesLog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMonitorScheduledQueryRulesLogTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts">DataAzurermMonitorScheduledQueryRulesLogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/monitor_scheduled_query_rules_log#timeouts DataAzurermMonitorScheduledQueryRulesLog#timeouts}

---

### DataAzurermMonitorScheduledQueryRulesLogCriteria <a name="DataAzurermMonitorScheduledQueryRulesLogCriteria" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteria.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesLog } from '@cdktf/provider-azurerm'

const dataAzurermMonitorScheduledQueryRulesLogCriteria: dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteria = { ... }
```


### DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension <a name="DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesLog } from '@cdktf/provider-azurerm'

const dataAzurermMonitorScheduledQueryRulesLogCriteriaDimension: dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension = { ... }
```


### DataAzurermMonitorScheduledQueryRulesLogTimeouts <a name="DataAzurermMonitorScheduledQueryRulesLogTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesLog } from '@cdktf/provider-azurerm'

const dataAzurermMonitorScheduledQueryRulesLogTimeouts: dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/monitor_scheduled_query_rules_log#read DataAzurermMonitorScheduledQueryRulesLog#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/monitor_scheduled_query_rules_log#read DataAzurermMonitorScheduledQueryRulesLog#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList <a name="DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesLog } from '@cdktf/provider-azurerm'

new dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference <a name="DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesLog } from '@cdktf/provider-azurerm'

new dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.operator">operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension">DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.operator"></a>

```typescript
public readonly operator: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension">DataAzurermMonitorScheduledQueryRulesLogCriteriaDimension</a>

---


### DataAzurermMonitorScheduledQueryRulesLogCriteriaList <a name="DataAzurermMonitorScheduledQueryRulesLogCriteriaList" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesLog } from '@cdktf/provider-azurerm'

new dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference <a name="DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesLog } from '@cdktf/provider-azurerm'

new dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.dimension">dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList">DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteria">DataAzurermMonitorScheduledQueryRulesLogCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.dimension"></a>

```typescript
public readonly dimension: DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList">DataAzurermMonitorScheduledQueryRulesLogCriteriaDimensionList</a>

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorScheduledQueryRulesLogCriteria;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogCriteria">DataAzurermMonitorScheduledQueryRulesLogCriteria</a>

---


### DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference <a name="DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorScheduledQueryRulesLog } from '@cdktf/provider-azurerm'

new dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts">DataAzurermMonitorScheduledQueryRulesLogTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermMonitorScheduledQueryRulesLogTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermMonitorScheduledQueryRulesLog.DataAzurermMonitorScheduledQueryRulesLogTimeouts">DataAzurermMonitorScheduledQueryRulesLogTimeouts</a>

---



